<?php get_header(); ?>

<main>
  <ul>
    カテゴリー
    <li><a href="/">全ての記事</a></li>
    <?php
      $categories = get_categories();
      foreach ($categories as $category) :
    ?>
      <li><a href="<?php echo get_category_link($category->cat_ID); ?>"><?php echo $category->name; ?>（<?php echo $category->count; ?>）</a></li>
    <?php endforeach; ?>
  </ul>
  <br>
  <div>
    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <section class="post-item">
         <a class="post__link" href="<?php the_permalink(); ?>">
          <h2><?php the_title(); ?></h2>
        </a>
        </section>
      <?php endwhile; ?>
    <?php else : ?>
      <div class="error">
        <p>お探しの記事は見つかりませんでした。</p>
      </div>
    <?php endif; ?>
  </div>
</main>

<?php get_footer(); ?>
