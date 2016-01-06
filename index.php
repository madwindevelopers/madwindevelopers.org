

<?php
    
    include 'website-head.php';
?>

  
  <body style="cursor: auto;">
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
		
          <button type="button" class="navbar-toggle" data-toggle="collapse" 
          data-target=".navbar-collapse">
            <span class="icon-bar"></span> 
            <span class="icon-bar"></span> 
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <b>
              MADWIN DEVELOPERS
            </b>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </a>
        </div>
		
        <div class="navbar-collapse collapse hidden-lg">
          <ul class="nav navbar-nav navbar-right">
            <li data-toggle="collapse" data-target=".nav-collapse">
              <a href="#" class="scroll-link" data-id="apps">Apps</a>
            </li>
            <li>
              <ul class="navbar-sub-list visible-xs" style="list-style-type:none">
                <li class="navbar-sub-item" data-toggle="collapse" data-target=".nav-collapse">
                  <a class="btn-block scroll-link" data-id="carhud" href="#">CarHUD</a>
                </li>
                <li class="navbar-sub-item" data-toggle="collapse" data-target=".nav-collapse">
                  <a class="btn-block scroll-link" data-id="mwcalc" href="#">MWCalc</a>
                </li>
                <li class="navbar-sub-item" data-toggle="collapse" data-target=".nav-collapse">
                  <a class="btn-block scroll-link" data-id="mwbar" href="#">MWBar</a>
                </li>
              </ul>
              <a href="#" class="scroll-link" data-id="contact">Contact</a>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
	  
    </div>
	
    <div id="headerwrap">
      <div class="container">
        <div class="row">
		
          <div class="col-sm-6">
            <h1>
              Madwin Developers
            </h1>
            <p>
              Madwin Developers is a small company comprised of my partner and myself. 
              My partner heads the creative development/motivation side where as myself 
              is the technical expert. Developing for android is not our main jobs 
              but rather a fun hobby we do in our free time. &nbsp; Everything we 
              develop is merely for fun. Check out our 
              <a href="https://play.google.com/store/apps/dev?id=6450798511126695180">
                Google Play Developer
              </a> 
              page.&nbsp; Hope you enjoy our work and please fill out a survey with 
              your comment or ideas.
            </p>
          </div>
		  
          <!-- /col-lg-6 -->
          <div class="col-sm-6 col-xs-offset-1 col-sm-offset-0">
            <img class="img-responsive" 
            src="assets/img/screenshot_carhud_glare_shadow_525x881.png">
            </img>
          </div>
          <!-- /col-lg-6 -->
		  
        </div>
        <!-- /row -->
		
      </div>
      <!-- /container -->
	  
    </div>
    <!-- /headerwrap -->
    <!-- /container -->
    <div id = "apps" class = "page-section container">
		  <h1>
        Apps
      </h1>
		<div class="row">
		  
			<div class="page-section col-sm-4" id="carhud">			  
				<h3 class="img-title-header">				
          <img src="assets/img/carhud_app_icon.png" alt="CarHUD App Icon" align="bottom" 
          height="70">
          </img>
            CarHUD
        </h3>
				<p>
          CarHUD is a heads-up display for your vehicle. The app shows current 
          notifications, media player information, and has a map with route 
          guidance.
          <br/>
          <br/>
				  Check out the source code on GitHub: 
            <pre>
              <a class = "hyperlink" href="https://github.com/madwindevelopers/carhud" 
              target="_blank">
                https://github.com/madwindevelopers/carhud
              </a>
            </pre>
            <br/>
            <br/>
  				<a class="hyperlink" 
          href="https://play.google.com/store/apps/details?id=com.madwin.carhud" 
          target="_blank"> 
            Download on Google Play 
          </a>
        </p>
			</div>
			
			<div class = "page-section col-sm-4" id = "mwcalc">
				<h3 class = "img-title-header"> 
          <img src="assets/img/mwcalc_app_icon.png" alt="MWCalc App Icon" 
          align="bottom" height="70">
            MWCalc
          </img>
        </h3>
				<p>
					MWCalc is an experiment in design and development by the all
					aspiring software designer engineers at Madwin Developers. Madwin's
					concept is to take the ordinary and make it revolutionary. MWCalc
					is the first step in what will be a long line of advanced Android
					applications. MWCalc is currently a work in progress. As you can
					tell by the name this will be a calculator application. I'm
					designing this app as a side project in orger to learn java and
					android programming better. More refinements and additions are
					continuously being built into the application with hopes of the
					initial release soon. Stay tuned for more updates.... 
          <br/> 
          <br/> 
          Check out the source code on github:  
          <pre>
            <a class = "hyperlink" href="https://github.com/andrewrohde/MWCalc" 
            target="_blank">
              https://github.com/andrewrohde/MWCalc
            </a>
          </pre>
          <br/>
          <br/>
				<a class="hyperlink" 
        href="https://play.google.com/store/apps/details?id=com.madwin.mwcalc" 
        target="_blank"> 
          Download on Google Play 
          </a>
        </p>
			</div>
			
			<div class = "page-section col-sm-4" id = "mwbar">
				<h3 class = "img-title-header"> 
        <img src="assets/img/mwbar_app_icon.png" alt="MWBar App Icon" align="bottom" 
        height="70">
          MWBar
        </h3>
				<p>
          MWBar is a simple app based on the UCCW apkmad
					template. I've created a minimal status bar (minus the
					notifications) which shows the time, date and battery status. Each
					of these info areas has a hotspot associated with it to connect the
					user either with the alarm clock, add calender appointment or view
					battery statistics. There is a basic grey background and a glass
					image background version of the bar. This app is compatible only
					with UCCW. More features will be added in the future. Follow the
					link below to download from the play store. 
          <br/>
          <br/>
				  <a class="hyperlink" 
          href="https://play.google.com/store/apps/details?id=com.madwindevelopers.mwbar" 
          target="_blank"> 
            Download on Google Play 
          </a>
        </p>
			</div>
		
      </div>
    </div>
    <div id="contact" class="page-section container" 
      style="background-color: #DFDFDF; padding-bottom:12px;">
        <h1 class = "col-centered">
          Contact
        </h1>
        <div class="centered">
              <h3>
                Comment Form
              </h3>
        </div>

      <form role="form" method="post" action="email_comment.php">

        <div class = "row">
            <div class = "col-sm-5 col-xs-offset-1 col-sm-offset-1 col-md-offset-2">
              <div class="form-group">
                <label class="control-label">
                  Name
                </label>
                <div class="controls">

                  <input type="text" name="name" class="form-control" placeholder="Name">
                </div>
              </div>

              <div class="form-group">
                <label class="control-label">Email</label>
                <div class="controls">

                  <input type="email" name="email" class="form-control" placeholder="Email">

                </div>
              </div>

              <div class="form-group">
                <label class="control-label">Subject</label>
                <div class="controls">

                  <input type="text" name="subject" class="form-control" placeholder="Subject">

                </div>
              </div>
            </div>


          <div class = "col-sm-5 col-xs-offset-1 col-sm-offset-0">


            <div class="form-group">
              <label class="control-label">
                Comment
              </label>
                
              <div class="controls">
                <textarea class="form-control" name="comments" placeholder="Comment" 
                  style="height: 180px; ">
                </textarea>
              </div>
            </div>

            <button class="btn btn-primary" type="submit" value="submit" 
            name="email_comments" action="email_comment.php">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="container">
      <hr>
    </div>
    <div class = "container">
      <div class = "row centered">
          
        <form class = "form-inline" role="form">
          <h4>
            Mailing List
          </h4>
          <p>
            Enter your email address below to join our mailing list.
          </p>
        </form>
          
      </div>
      <div class = "row centered">
          
        <form class = "form-inline" role = "form" method = "post" 
        action = "add_to_email_list.php">
          <div class = "form-group">
            <input type = "email" class="col-centered form-control" 
            id = "exampleInputEmail1" placeholder = "Enter your email address" 
            name = "invite_email">
          </div>
          <button type = "submit" value = "submit" name = "email_invite" 
          class = "btn btn-warning btn-lg">Invite Me!</button>
        </form>
          
      </div>
      <!-- /row -->
      <hr>
    </div>
    <!-- /container -->
    <!--==/container==-->
    <!-- /container -->
    <div class="container"> <!-- footer placeholder -->
      <!-- /row -->
      <div class="row mt centered">
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
      

      
    <!-- Bootstrap core JavaScript==================================================- ->       
    <!-- Placed at the end of the document so the pages load faster -->
  
    <script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" id="hiddenlpsubmitdiv" style="display: none;">
    </script>
    <script type="text/javascript">
        $('.nav a').on('click', function(){
            $(".btn-navbar").click(); //bootstrap 2.x
            $(".navbar-toggle").click() //bootstrap 3.x by Richard
        });
    </script>

  </body>

</html>
