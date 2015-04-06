<?php 	
	get_header(); while ( have_posts() ) : the_post(); 
	
	$page=$post->ID;
	$parent=$post->post_parent;
	
	$imageArray = wp_get_attachment_image_src( get_post_thumbnail_id($parent), 'full' ); $mainmast = $imageArray[0]; 
	$imageArray = wp_get_attachment_image_src( get_post_thumbnail_id($page), 'full' ); $mast = $imageArray[0]; 
?>
			<script type="text/javascript">
				$(document).ready(function(){ $('#mast').backstretch('<?php echo $mainmast; ?>'); });	
			</script>
			<div id="content" class="tk-omnes-pro">
        		<div id="mast">
        		
	        		<div class="headline">
	        			<h3><?php echo get_post_meta($parent, 'Tagline', true); ?></h3>
	        			<div class="copy">
	        				<?php postpage($parent); ?>
	        			</div>
	        			<a href="#"><span>Learn More</span></a>
	        			<a href="#"><span>See The Resort</span></a>
	        		</div>
	        		
        		</div>
        		<div id="page">
        			<div class="page-nav clearfix">
	        			<h2><?php echo get_the_title($parent);?></h2>
	        			<ul class="clearfix">
	        				<?php wp_list_pages('title_li=&child_of='.$parent); ?>
	        			</ul>
        			</div>
        			<div class="featured" style="background: url(<?php echo $mast; ?>) no-repeat top left">
	        			<h3><?php echo get_post_meta($page, 'Tagline', true); ?></h3>
        			</div>
        			<div class="main clearfix">
	        			<div class="copy">
	        				<?php the_content(); ?>
	        			</div>
        		</div>
        		</div><!--//.main-->
        	</div><!-- // #content -->

<?php endwhile; get_footer(); ?>