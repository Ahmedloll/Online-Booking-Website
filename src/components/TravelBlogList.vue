<template>
  <section class="bgwhite layout">
    <div class="container flex-s-between">
      <h2>TRAVEL BLOG</h2>
      <div class="container">
        <a class="active" href="#">Reviews</a>
        <a href="#">Destination</a>
        <a href="#">Handook</a>
      </div>
      <a href="#">View All</a>
    </div>
    <div class="container flex-s-between">
      <TravelBlogItem
        v-for="blog in blogs"
        :blog="blog"
        :key="blog.tag"
      ></TravelBlogItem>
    </div>
  </section>
</template>

<script>
import TravelBlogItem from "./TravelBlogItem";
export default {
  name: "TravelBlogList",
  data() {
    return {
      blogs: [
        {
          image:
            "https://images.pexels.com/photos/205342/pexels-photo-205342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "From Wetlands To Canals And Dams Amesterdam Is Alive",
          description:
            "Travel Health Useful Medical Information For Good Health Be",
        },
        {
          image:
            "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          tag: "Cost Cutting Ideas For Your Magical Wedding",
          description: "Global Resorts Network Gm Putting Timeshares To Shame",
        },
        {
          image:
            "https://images.pexels.com/photos/756083/pexels-photo-756083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          tag: "Getting Cheap Airfare For Last Minute Travel",
          description:
            "Family Safari Vacation To The Home Of The Paradise Of Travelers",
        },
        {
          image:
            "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          tag: "New Ideas For A Low Cost Vacation On Water",
          description:
            "Will The Democrats Be Able To Reverse The Online Gambling Ban",
        },
      ],
    };
  },

  components: {
    TravelBlogItem,
  },
};
</script>

<style scoped>
a {
  font-family: playfair-display;

  line-height: 21px;
  color: #4c4c4c;
  margin: auto 10px;
}
a.active {
  color: black;
  border-bottom: 2px solid #e0ad1e;
  font-weight: bold;
}
</style>