myApp.controller('HomeCtrl', [function () {
    var self = this;

    self.$videoSrc = 'https://www.youtube.com/embed/KxRl7glLf1U?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;cc_lang_pref=en&amp;'; 
    self.setUiBehavior = function () {
        // $('#openVideoLink').click(function () {
        //     var src = 'https://www.youtube.com/embed/KxRl7glLf1U';
        //     $('#myModal').modal('show');
        //     $('#myModal iframe').attr('src', src);
        // });

        // $('#myModal button').click(function () {
        //     $('#myModal iframe').removeAttr('src');
        // });

        // Gets the video src from the data-src on each button

        // var $videoSrc;
        // $('.video-btn').click(function () {
        //     self.$videoSrc = $(this).data("src");
        // });
        // console.log($videoSrc);



        // when the modal is opened autoplay it  
        $('#myModal').on('shown.bs.modal', function (e) {

            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr('src', self.$videoSrc );
        });

        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            // $("#video").attr('src', self.$videoSrc);
            $("#video").removeAttr('src');

        });
    }

    self.setUiBehavior();
}]);