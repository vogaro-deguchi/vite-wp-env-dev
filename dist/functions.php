<?php

function add_sample_block() {
    wp_enqueue_script(
        'sample_block_script',
        get_stylesheet_directory_uri() . '/assets/scripts/wp/qanda_block.js', 
        array( 'wp-blocks', 'wp-element', 'wp-block-editor' ) 
    );
}
add_action( 'enqueue_block_editor_assets', 'add_sample_block' );
