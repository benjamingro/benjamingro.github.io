myApp.controller('HomeCtrl',[function(){
    var self = this; 
    self.setUiBehavior = function()
    {
        $('#openVideoLink').click(function () {
            var src = 'https://www.youtube.com/embed/KxRl7glLf1U';
            $('#myModal').modal('show');
            $('#myModal iframe').attr('src', src);
        });
    
        $('#myModal button').click(function () {
            $('#myModal iframe').removeAttr('src');
        });
    }
    self.setUiBehavior(); 
}]); 