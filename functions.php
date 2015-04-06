<?php
/**
 * _s functions and definitions
 *
 * @package _s
 * @since _s 1.0
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 *
 * @since _s 1.0
 */
if ( ! isset( $content_width ) )
	$content_width = 640; /* pixels */

if ( ! function_exists( '_s_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 *
 * @since _s 1.0
 */
function _s_setup() {

	/**
	 * Custom template tags for this theme.
	 */
	require( get_template_directory() . '/inc/template-tags.php' );

	/**
	 * Custom functions that act independently of the theme templates
	 */
	require( get_template_directory() . '/inc/extras.php' );

	/**
	 * Custom Theme Options
	 */
	//require( get_template_directory() . '/inc/theme-options/theme-options.php' );

	/**
	 * WordPress.com-specific functions and definitions
	 */
	//require( get_template_directory() . '/inc/wpcom.php' );

	/**
	 * Make theme available for translation
	 * Translations can be filed in the /languages/ directory
	 * If you're building a theme based on _s, use a find and replace
	 * to change '_s' to the name of your theme in all the template files
	 */
	load_theme_textdomain( '_s', get_template_directory() . '/languages' );

	/**
	 * Add default posts and comments RSS feed links to head
	 */
	add_theme_support( 'automatic-feed-links' );

	/**
	 * Enable support for Post Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	/**
	 * This theme uses wp_nav_menu() in one location.
	 */
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', '_s' ),
	) );

	/**
	 * Add support for the Aside Post Formats
	 */
	add_theme_support( 'post-formats', array( 'aside', ) );
}
endif; // _s_setup
add_action( 'after_setup_theme', '_s_setup' );

/**
 * Register widgetized area and update sidebar with default widgets
 *
 * @since _s 1.0
 */
function _s_widgets_init() {
	register_sidebar( array(
		'name' => __( 'Sidebar', '_s' ),
		'id' => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget' => '</aside>',
		'before_title' => '<h1 class="widget-title">',
		'after_title' => '</h1>',
	) );
}
add_action( 'widgets_init', '_s_widgets_init' );

/**
 * Enqueue scripts and styles
 */
function _s_scripts() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );

	wp_enqueue_script( 'small-menu', get_template_directory_uri() . '/js/small-menu.js', array( 'jquery' ), '20120206', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	if ( is_singular() && wp_attachment_is_image() ) {
		wp_enqueue_script( 'keyboard-image-navigation', get_template_directory_uri() . '/js/keyboard-image-navigation.js', array( 'jquery' ), '20120202' );
	}
}
add_action( 'wp_enqueue_scripts', '_s_scripts' );

/**
 * Implement the Custom Header feature
 */
//require( get_template_directory() . '/inc/custom-header.php' );

function twentyten_excerpt_length( $length ) {
	return 40;
}
add_filter( 'excerpt_length', 'twentyten_excerpt_length' );

function twentyten_continue_reading_link() {
	return ' <a class="open-post" href="/blog">' . __( 'Read More &rsaquo;', 'twentyten' ) . '</a>';
}

function twentyten_auto_excerpt_more( $more ) {
	return ' &hellip;' . twentyten_continue_reading_link();
}
add_filter( 'excerpt_more', 'twentyten_auto_excerpt_more' );

function twentyten_custom_excerpt_more( $output ) {
	if ( has_excerpt() && ! is_attachment() ) {
		$output .= twentyten_continue_reading_link();
	}
	return $output;
}
add_filter( 'get_the_excerpt', 'twentyten_custom_excerpt_more' );

function twentyten_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'twentyten_page_menu_args' );

function postpage($x) {
	$p = get_page( $x );
	echo apply_filters('the_content',$p->post_content);
}



function button($atts, $content = null) {
	extract(shortcode_atts(array(
		"link" => '',
		"title" => '',
	), $atts));
	return '<div class="button">
				<h4><a href="'.$link.'" title="'.$title.'"><span>'.$content.'</span></a></h4>
			</div>';
}
add_shortcode( 'button', 'button' );

function photos($atts, $content = null) {
	extract(shortcode_atts(array(
		"link" => '',
		"title" => '',
	), $atts));
	return '<div class="button photo-button">
				<h4><a href="'.$link.'" title="'.$title.'"><span>'.$content.'</span></a></h4>
			</div>';
}
add_shortcode( 'photos', 'photos' );

function tour($atts, $content = null) {
	extract(shortcode_atts(array(
		"link" => '',
		"title" => '',
	), $atts));
	return '<div class="button tour-button">
				<h4><a href="'.$link.'" title="'.$title.'"><span>'.$content.'</span></a></h4>
			</div>';
}
add_shortcode( 'tour', 'tour' );

function plans($atts, $content = null) {
	extract(shortcode_atts(array(
		"link" => '',
		"title" => '',
	), $atts));
	return '<div class="button plan-button">
				<h4><a href="'.$link.'" title="'.$title.'"><span>'.$content.'</span></a></h4>
			</div>';
}
add_shortcode( 'plans', 'plans' );

function accordion($atts, $content = null) {
	extract(shortcode_atts(array(
		"title" => ''
	), $atts));
	return '<div class="accordion">
				<h5><a href="#">'.$title.'</a></h5>
				<div class="accordion-content">'.do_shortcode($content).'</div>
			</div>';
}

add_shortcode( 'accordion', 'accordion' );

