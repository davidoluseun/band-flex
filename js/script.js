(function() {
  "use strict";

  /*  -----------------------  jQuery document ready function  ----------------------  */
  $(function() {
    
    /*  --------------------  Smooth scrolling $ scrollspy  --------------------- */
    
    // Declare topOffset variable, grab #main-nav target links for smooth scrolling
    var topOffset = 64,
        scrollLinks = $("#main-nav a:not(#more-dropdown, .dropdown-link, #search-link)");
    
    // Attach click event to scrollLinks
    scrollLinks.click(function() {
      
      // Animate body or html scrolling
      $("body, html").animate({
        scrollTop: $(this.hash).offset().top  - (topOffset - 10)
      }, 500);

      // Disable the links
      return false;

    });

    // Attach click event to #to-content(skip to main content) link
    $("#to-content").click(function() {

      // Animate body or html scrolling
      $("body, html").animate( {
        scrollTop: $(this.hash).offset().top - (topOffset - 10)
      }, 500);

    });

    // Attach scroll event to window object
    $(window).scroll(function() {

      // Grab window current scroll position
      var scrollbarPosition = $(this).scrollTop();

      // Execute a callback for every scrollLinks element.
      scrollLinks.each(function() {
        var linksOffset = $(this.hash).offset().top - topOffset;

        // If any of the scrollLinks offset value is less than or equal to 
        // window scroll position, add .active class to the li element of that link.
        // Remove .active class from the siblings li elements
        if (linksOffset <= scrollbarPosition) {
          $(this).parent().addClass("active");
          $(this).parent().siblings().removeClass("active");
        }

      });
    });
    
    /*  ---------------- Toggle navigation on small devices  ---------------- */

    // Grab #nav-toggler element
    var $navToggler = $("#nav-toggler");

    // Attach click event to #nav-toggler element
    $navToggler.click(function() {

      // Toggle #main-nav element
      $("#main-nav").toggle("slow");

      // Alternate $navToggler aria-expanded attribute value
      if ($navToggler.attr("aria-expanded") == "false") {
        $navToggler.attr("aria-expanded", "true");
      } else {
          $navToggler.attr("aria-expanded", "false");
      }

    });

    /*  --------------------- Toggle dropdown menu  ----------------------- */

    // Grab #more-dropdown element
    var $dropdownLink = $("#more-dropdown");

    // Attach click event to #more-dropdown element
    $dropdownLink.click(function() {
     
      // Toggle #dropdown-menu element
      $("#dropdown-menu").toggle();

      // Alternate #more-dropdown aria-expanded attribute value
      if ($dropdownLink.attr("aria-expanded") == "false") {
        $dropdownLink.attr("aria-expanded", "true");
      } else {
        $dropdownLink.attr("aria-expanded", "false");
      }

      // Disable the link
      return false;

    }); 

    /*  ------------------- Toggle Navigation form  ----------------------- */

    // Grab #search-link element
    var $searchLink = $("#search-link");

    // Attach click event to $searchLink
    $searchLink.click(function() {

      // Toggle #nav-form element
      $("#nav-form").toggle();

      // Alternate #search-link element aria-expanded attribute value
      if ($searchLink.attr("aria-expanded") == "false") {
        $searchLink.attr("aria-expanded", "true");
      } else {
        $searchLink.attr("aria-expanded", "false");
      }

      // Alternate between search icon and cancel icon 
      var $searchIcon = $("#search-icon"); 
      $searchIcon.toggleClass("fa-search");
      $searchIcon.toggleClass("fa-times");

      // Disable the link
      return false;

    }); 

    /*  -------------------  Flexslider activation  ----------------------- */
  
    $(".flexslider").flexslider({
      animation: "slide",
      pauseOnAction: false,
      pauseOnHover: true,
    }); 

    /*  ------------------------- Tabbed panels  -------------------------- */

    //  Grab the first blog link, all the blog tabs and all blog posts
    var $firstBlogTab = $("#blogTab li a:first"),
        $blogTabs = $("#blogTab li a"),
        $blogPosts = $(".blog");

    // Add .tab-active class to $firstBlogTab to display it on page load.
    // Hide all $blogPosts and show the first one
    $firstBlogTab.addClass("tab-active");
    $blogPosts.hide();
    $(".blog:first").show();

    // Set all $blogTabs aria-selected attribute to false,
    // but that of $firstBlogTab to true
    $blogTabs.attr("aria-selected", "false");
    $firstBlogTab.attr("aria-selected", "true");

    // Attach click event to $blogTabs
    $blogTabs.click(function() {

      // Grab the clicked link
      var $targetBlogTab = $(this);

      // Check if the link doesn't has .tab-active class 
      if (!$targetBlogTab.hasClass("tab-active")) {
        // Grab the hash property of the link
        var $targetBlog = $(this.hash);

        // Remove .tab-active class from all links and add it to the clicked link
        $blogTabs.removeClass("tab-active");
        $(this).addClass("tab-active");

        // Set the aria-selected attributes of all the links to false,
        // set that of the clicked link to true
        $blogTabs.attr("aria-selected", "false");
        $(this).attr("aria-selected", "true");
        
        // Hide all the .blog elements and show the target blog 
        $blogPosts.hide();
        $($targetBlog).fadeIn("slow");
      }

      // Disable the link
      return false;
      
    }); // $blogTabs click handler

  }); // jQuery document ready function

})(); //Immediately Invoked Function Expression (IIFE)