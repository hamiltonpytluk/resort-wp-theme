<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php wp_title( '|', true, 'right' ); ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=1440">
        <link rel="stylesheet" href="/wp-content/themes/ibr/style.css">
        <link rel="stylesheet" href="/wp-content/themes/ibr/style-alt.css">
        <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
        <script src="/wp-content/themes/ibr/scripts/scripts.js"></script>
    </head>
    <body>
        
        <div id="container">
        
        	<?php if(!is_home()) { echo '<div class="header-wrap">'; } ?>
        	<div id="header">
        		<div id="logo">
        			<h1><a href="/"><span>Ibis Bay Beach Resort</span></a></h1>
        		</div><!-- // #logo -->
        		<div id="menu" class="tk-omnes-pro">
        			<?php wp_nav_menu( array('menu' => 'Main Menu' )); ?>
        		</div><!-- // #menu -->
        		<div id="secondary">
        			<ul>
        				<li class="calendar"><a href="https://secure.iqres0685.com/iqreservations/asp/IQHome.asp" target="_blank"><span>Calendar</span></a></li>
        				<li class="photo"><a href="#"><span>Photo</span></a></li>
        				<li class="video"><a href="#"><span>Video</span></a></li>
        				<li class="tour"><a class="tour-button-main" href="#"><span>Tour</span></a></li>
        				<li class="mail"><a href="/its-your-resort/contact-us/"><span>Mail</span></a></li>
        				<li class="weather"><a href="#"><span>Weather</span></a></li>
        			</ul>
        		</div><!-- // #secondary -->
        	</div><!-- // #header -->
        	<?php if(!is_home()) { echo '</div>'; } ?>