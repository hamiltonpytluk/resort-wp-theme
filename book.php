<?php
	if($parent==5) $class = 'iyr';
	if($parent==101) $class = 'car';
	if($parent==43) $class = 'ear';
	if($parent==53) $class = 'lub';
	if($parent==66) $class = 'msp';
?>
			<div id="book" class="<?php echo $class ?> tk-omnes-pro <?php if(!is_home()) echo 'inside '; ?>">
        		<div class="buttonwrap">
	        		<div class="calendar"></div>
	        		<h2>Book It Now!</h2>
	        		<a href="https://secure.iqres0685.com/iqreservations/asp/IQHome.asp" target="blank"></a>
        		</div>
        	</div>
        	
        	<div id="tour" class="<?php echo $class ?> tk-omnes-pro <?php if(!is_home()) echo 'inside '; ?>">
        		<div class="buttonwrap">
	        		<div class="foot"></div>
	        		<h2>Walk Around Now!</h2>
	        		<a class="tour-button-main" href="#"></a>
        		</div>
        	</div>