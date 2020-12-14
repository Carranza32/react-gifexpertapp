
export const getGifts = async (category) => {
   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=7MuUbIPrpOd8vevcJzs5CVpj4LJ3Lw4k`;
   const resp = await fetch(url);
   const {data} = await resp.json();

   const gifs = data.map(item => {
      return {
         id: item.id,
         title: item?.title,
         url: item.images?.downsized_medium.url
      }
   })

   return gifs;
}