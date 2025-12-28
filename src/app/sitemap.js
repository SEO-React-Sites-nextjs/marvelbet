const Sitemap = async () => {
  const baseUrl = "https://www.marvel365bet.com";

  // 如果不再抓文章資料，就不用 map 了
  // 可以直接返回靜態頁面的 sitemap
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/article`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // 可以在這裡手動加入更多靜態文章 URL
    // {
    //   url: `${baseUrl}/article/sample-article`,
    //   lastModified: new Date().toISOString(),
    //   changeFrequency: "daily",
    //   priority: 1,
    // },
  ];
};

export default Sitemap;
