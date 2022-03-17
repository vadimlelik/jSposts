export class TransformService {
  static fbObjectToArray(fbData) {
    console.log(fbData)
    return Object.keys(fbData).map(key => {
      const item = fbData[key]
      item.id = key
      console.log(item)
      return item
    })
  }
}