myApp.controller('OverallCtrl',[function(){
    var self = this; 
    self.setUiBehavior = function()
    {
        $('.nav-item, .navbar-brand').click(function(){
            $('.navbar-collapse').removeClass('show');
        });
    } 
    self.setUiBehavior(); 
}]); 