<?php 
	//	Template Name: Interior Page	
	get_header(); while ( have_posts() ) : the_post(); 
	
	$page=$post->ID;
	$parent=$post->post_parent;
	
	$imageArray = wp_get_attachment_image_src( get_post_thumbnail_id($parent), 'full' ); $mainmast = $imageArray[0]; 
	$imageArray = wp_get_attachment_image_src( get_post_thumbnail_id($page), 'full' ); $mast = $imageArray[0]; 
	
	if($parent==5) $class = 'iyr';
	if($parent==101) $class = 'car';
	if($parent==43) $class = 'ear';
	if($parent==53) $class = 'lub';
	if($parent==66) $class = 'msp';
	
	$photo = get_post_meta($page, 'Photo', true);
	
?>
			<script type="text/javascript">
				$(document).ready(function(){ $('#mast').backstretch('<?php echo $mainmast; ?>'); });	
			</script>
			<?php include("book.php"); ?>
			<div id="content" class="<?php echo $class; ?> tk-omnes-pro">
        		<div id="mast">
        		
	        		<div class="headline">
	        			<h3><?php echo get_post_meta($parent, 'Tagline', true); ?></h3>
	        			<div class="copy">
	        				<?php postpage($parent); ?>
	        			</div>
	        			<a class="tocontent" href="#"><span>Learn More</span></a>
	        			<a class="tour-button-main" href="#"><span>360&deg; Virtual Tour</span></a>
	        		</div>
	        		
	        		<?php if(get_post_meta($parent, 'See That Area', true)) { ?>
        			<div class="see-that-area tour-button"><a href="<?php echo get_post_meta($parent, 'See That Area', true);?>"><span>See More</span></a></div>
        			<?php } ?>
	        		
        		</div>
        		<div id="page">
        			<div class="page-nav clearfix">
	        			<h2><?php echo get_the_title($parent);?></h2>
	        			<ul class="clearfix">
	        				<?php wp_list_pages('title_li=&child_of='.$parent); ?>
	        			</ul>
        			</div>
        			<div class="featured" style="background: url(<?php echo $mast; ?>) no-repeat top left">
        				<?php if(get_post_meta($page, 'See That Area', true)) { ?>
	        			<div class="see-that-area tour-button"><a href="<?php echo get_post_meta($page, 'See That Area', true);?>"><span>See More</span></a></div>
	        			<?php } ?>
	        			<h3><?php echo get_post_meta($page, 'Tagline', true); ?></h3>
        			</div>
        			<div class="main clearfix">
	        			<div class="copy">
	        				<?php the_content(); ?>
	        				<div class="back-to-top">
	        					<h4><a href="#"><span>Back to Top</span></a></h4>
	        				</div>
	        			</div>
	        			<div class="third"><img src="<?php echo $photo; ?>" alt="" /></div>
        		</div>
        		</div><!--//.main-->
        	</div><!-- // #content -->

<?php endwhile; get_footer(); ?>