<?php

/**
 * Register navigation menu.
 *
 * @return void
 */
function register_menus() {
    register_nav_menu( 'header-menu', __( 'Header Menu', 'postlight-headless-wp' ) );
    register_nav_menu( 'footer-menu-column1', __( 'Footer Menu Column 1', 'postlight-headless-wp' ) );
    register_nav_menu( 'footer-menu-column2', __( 'Footer Menu Column 2', 'postlight-headless-wp' ) );
    register_nav_menu( 'footer-menu-column3', __( 'Footer Menu Column 3', 'postlight-headless-wp' ) );
    register_nav_menu( 'footer-menu-column4', __( 'Footer Menu Column 4', 'postlight-headless-wp' ) );
}
add_action( 'after_setup_theme', 'register_menus' );
