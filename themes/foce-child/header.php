<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <div class="line first_line"></div>
                    <div class="line second_line"></div>
                    <div class="line third_line"></div>
                </button>
                <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                        rel="home"><?php bloginfo( 'name' ); ?></a></li>
                <ul class="navbar-links">
                    <img class="logo_navbar" src="wp-content/themes/foce-child/assets/images/LOGO.png"
                        alt="logo Fleurs d'oranger & chats errants">
                    <li class="nav_story"><a href="#story">Histoire</a></li>
                    <li class="nav_characters"><a href="#characters">Personnages</a></li>
                    <li class="nav_place"><a href="#place">Lieu</a></li>
                    <li class="nav_studio"><a href="#studio">Studio Koukaki</a></li>
                    <p>STUDIO KOUKAKI</p>
                </ul>

                </ul>
            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->