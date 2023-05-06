import { createSlice } from "@reduxjs/toolkit";

export const newsFeedSlice = createSlice({
  name: "newsfeed",
  initialState: [
    {
      title: "Discover the Best Hiking Trails in the Pacific Northwest",
      description:
        "Explore the breathtaking beauty of the Pacific Northwest on foot. From the rugged wilderness of Olympic National Park to the stunning vistas of Mt. Rainier, there's an adventure waiting for you.",
      image:
        "https://images.unsplash.com/photo-1502223566593-39d3b1c58bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Top 10 Hiking Trails in California",
      description:
        "From the towering peaks of Yosemite to the rugged coastline of Big Sur, California is home to some of the most iconic hiking trails in the world. Check out our top 10 list to plan your next adventure.",
      image:
        "<https://images.unsplash.com/photo-1498910177862-ee8f45fcd030?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
    {
      title: "Hiking the Grand Canyon: Tips and Tricks",
      description:
        "The Grand Canyon is one of the most awe-inspiring natural wonders in the world, and hiking its trails is an experience like no other. Check out our guide for everything you need to know before your trip.",
      image:
        "<https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
    {
      title: "The Best Hiking Trails for Fall Foliage",
      description:
        "There's something magical about hiking among the vibrant colors of autumn. Check out our top picks for the best fall foliage hikes, and get ready to be amazed.",
      image:
        "<https://images.unsplash.com/photo-1471627536357-8c8f8fda4f57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
    {
      title: "Hiking the Inca Trail to Machu Picchu",
      description:
        "Embark on the adventure of a lifetime with a trek on the legendary Inca Trail to Machu Picchu. Learn about the history and culture of the Incas as you hike through breathtaking mountain landscapes.",
      image:
        "<https://images.unsplash.com/photo-1567184554137-49d8a5a9e31f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
    {
      title: "The Best Hiking Trails for Beginners",
      description:
        "Just getting started with hiking? Check out our top picks for beginner-friendly trails that offer stunning views and manageable distances. You'll be hooked in no time.",
      image:
        "<https://images.unsplash.com/photo-1505852679239-3f0a0a4dbbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
    {
      title: "Hiking in Banff National Park",
      description:
        "Experience the rugged beauty of the Canadian Rockies with a hike in Banff National Park. From turquoise lakes to snow-capped peaks, this is a landscape like no other.",
      image:
        "<https://images.unsplash.com/photo-1508652945937-0bf9e5b94830?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
    {
      title: "The Best Hiking Trails in the Smoky Mountains",
      description:
        "The Great Smoky Mountains offer some of the most stunning scenery in the eastern United States. Check out our top picks for the best hiking trails in the region.",
      image:
        "<https://images.unsplash.com/photo-1552970125-5d07a9c2468e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
    {
      title: "Hiking the Camino de Santiago",
      description:
        "The Camino de Santiago is an ancient pilgrimage route that runs through Spain and France. Join the thousands of pilgrims who trek this historic trail every year, and experience the adventure of a lifetime.",
      image:
        "<https://images.unsplash.com/photo-1571940962682-0ccf074f7643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
    {
      title: "The Best Hiking Trails in the Swiss Alps",
      description:
        "The Swiss Alps offer some of the most breathtaking landscapes in the world. Check out our top picks for the best hiking trails in this stunning region.",
      image:
        "<https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60>",
    },
  ],
  reducers: {
    //
  },
});

export default newsFeedSlice.reducer;
