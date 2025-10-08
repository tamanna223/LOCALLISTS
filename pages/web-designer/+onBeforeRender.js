export default async function onBeforeRender(){
  const names = ['Starlink pvt. ltd','Digital web pvt. ltd','Canva pvt. ltd','Bees pvt. ltd','ABC pvt. ltd']
  const officeImages = [
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&fit=crop',
    'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=360&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=360&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=360&fit=crop',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=360&fit=crop'
  ]

  const mock = Array.from({length:5}).map((_,i)=>{
    const base = {
      id: i+1,
      name: names[i],
      tags: ['Full website design','Banner design','New pages'],
      stars: 5,
      reviews: [125,124,120,121,126][i],
      image: officeImages[i],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
    }
    // Standardize meta text
    if(i===0){
      return { ...base, location: '', distance: '8.8 miles away', ctaText: 'Request reply' }
    }
    if(i===1){
      return { ...base, location: 'Multiple locations', distance: '', ctaText: 'Request reply' }
    }
    // Canva card shows special CTA
    if(i===2){
      return { ...base, location: `${(Math.random()*9+1).toFixed(1)} miles away`, distance: `${(Math.random()*9+1).toFixed(1)} miles away`, ctaText: 'Ask to edit' }
    }
    return { ...base, location: `${(Math.random()*9+1).toFixed(1)} miles away`, distance: `${(Math.random()*9+1).toFixed(1)} miles away`, ctaText: 'Request reply' }
  })

  return { pageContext: { pageProps: { listings: mock } } }
}
