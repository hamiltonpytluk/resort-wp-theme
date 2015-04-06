<?php 
	//	Template Name: Blog Page	
	get_header(); while ( have_posts() ) : the_post(); 
	
	$page=$post->ID;
	
	if($page==75) { $class = 'rc'; $cat = 6; }
	if($page==77) { $class = 'itn'; $cat = 5; }
	
?>
			<?php include("book.php"); ?>
			<div id="content" class="<?php echo $class; ?> roll-bg tk-omnes-pro">
        		<div id="roll" class="clearfix">
        			<div class="posts">
        				<h2><?php if($cat==6) { echo 'Resort Calendar &amp; Events'; }
        						  if($cat==5) { echo 'In The News'; } ?></h2>
        				<?php
    						$args = array( 'cat' => $cat, 'order' =>  'DESC', 'orderby' => 'date', 'posts_per_page' => '50' );
							$loop = new WP_Query( $args );
							while ( $loop->have_posts() ) : $loop->the_post();			
							$imageArray = wp_get_attachment_image_src( get_post_thumbnail_id($page->ID), 'full' ); $url = $imageArray[0];			
						?>
						<div class="post">
							<?if($url){?><div class="featured" style="background: url(<? echo $url; ?>) no-repeat center center;"></div><?php }?>
							<h2><?php if($cat==6) { echo '<span>'; echo get_post_meta($post->ID, 'Event Date', true); echo '</span>'; } the_title(); ?></h2>
							<?php the_content(); ?>
						</div>
						<?php											 
							endwhile;
							wp_reset_postdata();
						?>
        			</div>        			
        		</div><!--//#roll-->
        	</div><!-- // #content -->

<?php endwhile; get_footer(); ?>