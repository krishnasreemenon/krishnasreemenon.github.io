
$('#girl').animatedModal({
  modalTarget:'girlModal',
  animatedIn:'bounceInUp',
  animatedOut:'bounceOutDown',
  // Callbacks
  beforeOpen: function() {
      console.log("The animation was called");
  },
  afterOpen: function() {
      console.log("The animation is completed");
  },
  beforeClose: function() {
      console.log("The animation was called");
  },
  afterClose: function() {
      console.log("The animation is completed");
  }
})

$('#legend').animatedModal({
  modalTarget:'legendModal',
  animatedIn:'rubberBand',
  animatedOut:'flipOutX',
  color:'#3498db'
})

$('#professional').animatedModal({
  modalTarget:'professionalModal',
  animatedIn:'lightSpeedIn',
  animatedOut:'lightSpeedOut',
  color:'#3498db'
})
