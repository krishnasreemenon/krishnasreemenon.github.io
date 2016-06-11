var app=angular.module('app', ['react']);

app.controller('gymController', ['$scope','$http', function($scope,$http){
	$http.get('data/gyms-original.json').success(function(data){
		$scope.gyms_data_from_the_server=data;
	});
}]);



var GymList = React.createClass({
	propTypes:{
		datapassedtoreactfromangular:React.PropTypes.array
	},
	render: function () {
		var gyms=this.props.datapassedtoreactfromangular;
		return (
			<div className="row">
				{gyms.map(function (item) {
					return(
						<div className="col-md-12 gym-listing" key={item._id}>
							<div className="col-md-3 gym-image">
								<div className="row"></div>
							</div>
							<div className="gym-details-container">
								<div className="col-md-9 gym-details-col">
									<div className="row gym-details">
										<div className="col-md-9">
											<h3 className="gym-name">{item.name}</h3>
											<div className="gym-location">
												<span><i className="fa fa-map-marker custom-map-marker col-md-1" aria-hidden="true"></i></span> <span className="col-md-10">{item.address}, {item.city}, {item.state}</span></div>
										</div>
										<div className="col-md-3 gym-rating-container">
											<div className="gym-rating"><Rating rating={item.ratings}/></div>
										</div>
									</div>
									<br/>
										<div className="gym-tags-container row">
											<div className="col-md-12 row">
												<TagList tags={item.tags}/>
											</div>
										</div>
								</div>
							</div>
						</div>

					);
				})}
			</div>
		);
	}
});

var Rating=React.createClass({
	propTypes:{
		rating:React.PropTypes.array
	},
	render:function(){
		var rating=this.props.rating;
		return(
			<span>
				{rating.total}
			</span>
		);
	}
});

var TagList=React.createClass({
	propTypes:{
		tags:React.PropTypes.array
	},
	render:function () {
		var tags = this.props.tags;
		return(
		<div>
			{tags.map(function (tag) {
				return(
					<div className="col-md-3 col-xs-6 gym-tag">{tag}</div>
				);
			})}
		</div>
		);

	}
});


app.directive('gymlist',function(reactDirective){
	return reactDirective(GymList);
});

angular.bootstrap(document, ['app']);