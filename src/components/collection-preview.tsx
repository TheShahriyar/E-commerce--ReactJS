const CollectionPreview = (prop:{title:string, items:any}) => {
  return (
    <>
      <h1>{prop.title}</h1>
      <ul>
        {prop.items.filter((item: any, idx: number) => idx < 4)
          .map((item: any) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  )
}

export default CollectionPreview

