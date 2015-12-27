<? include "inc/page_components/page_top.php"; ?>

<body>

<!-- Bootstrap Modals -->

<!-- CV download filetype dialog -->
<div class="modal fade" id="cvDialog" tabindex="-1" role="dialog" aria-labelledby="CV File Types" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Select Your Preferred CV File Type:</h4>
      </div>
      <div class="modal-body" style="text-align:center;padding:64px 0px;">
        <a href="resumes/robWoodCV-2015-12-PUBLIC.pdf" target="_blank"><img src="img/pdf.png" style="border:none;"></a><a style="margin-left:36px;" href="resumes/robWoodCV-2015-12-PUBLIC.doc" target="_blank"><img src="img/doc.png" style="border:none;"></a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Contact form submission error dialog -->
<div class="modal fade" id="alertModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Contact Form Submission Error:</h4>
      </div>
      <div class="modal-body" style="text-align:center;padding:12px 0px;">
        <p id="alertMessage"></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<? include "inc/page_components/page_controls.php"; ?>

  <div class="l-wrapper">
  
		<? include "inc/page_components/page_header.php"; ?>
    
    <div class="l-content-wrap" id="standard-content"> 
      
			<? include "inc/page_components/page_nav.php"; ?>
      
      <? include "inc/page_components/page_s1.php"; ?>
      <? include "inc/page_components/page_s2.php"; ?>
      <? include "inc/page_components/page_s3.php"; ?>
      <? include "inc/page_components/page_s4.php"; ?>
      <? include "inc/page_components/page_s5.php"; ?>
      <? include "inc/page_components/page_s6.php"; ?>
      <? include "inc/page_components/page_s7.php"; ?>


          
  	</div><!-- l-content-wrap -->
  
  </div><!-- l-wrapper -->
  
<!-- LOAD SCRIPTS -->

<script src="inc/js/jquery-1.11.0.min.js"></script>

<!-- Latest compiled and minified JavaScript -->
<script src="inc/bootstrap/js/bootstrap.min.js"></script>

<!-- flexslider -->
 <script src="inc/flexslider/jquery.flexslider.js"></script>
                 
<!-- skrollr -->
<script type="text/javascript" src="inc/skrollr/dist/skrollr.min.js"></script>

<!-- easy pie chart -->
<script src="inc/easy-pie-chart/dist/jquery.easypiechart.min.js"></script>

<!-- isotope -->
<script src="inc/isotope/jquery.isotope.min.js" ></script>
<script src="inc/isotope/jquery.isotope.sloppy-masonry.js" ></script>
    
<!-- nice scroll -->
<script src="inc/nice-scroll/jquery.nicescroll.min.js" ></script>

<!-- google maps -->
<script src="https://maps.googleapis.com/maps/api/js" type="text/javascript"></script>

<!-- Magnific Popup core JS file -->
<script src="inc/magnific/dist/jquery.magnific-popup.js"></script> 

<!-- Waypoints -->
<script src="inc/waypoints/waypoints.min.js"></script>
<script type="text/javascript" src="inc/js/jquery.browser.js"></script>
        
<!-- YTP -->
<!--<script type="text/javascript" src="inc/YTPlayer/inc/jquery.mb.YTPlayer.js"></script>-->

<!-- TWITTER SCRIPT -->
<!--<script type="text/javascript" charset="utf-8" src="inc/tweet/twitter/jquery.tweet.js"></script>-->

<!-- contact form checker -->
<script src="inc/form-validator/dist/jquery.validate.js"></script>

<!-- script calling -->
<script src="inc/js/common.js"></script>      

</body>   
</html>
