myApp.controller('OverallCtrl',[function(){
    var self = this; 
    self.setUiBehavior = function()
    {
        $('.nav-item').click(function(){
            $('.navbar-collapse').removeClass('show');
        });
    } 
    self.setUiBehavior(); 
}]); 