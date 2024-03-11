import http from './request'
// 获取景点相册
export async function getSceneryPhotoAlbum({ pageNum, pageSize }) {
  const params = {
    pageNum,
    pageSize,
    status: 1,
  }
  return http.post('/mobile/template/photoAlbum/list', params)
}
// 获取景点相册对应照片
export async function getSceneryPhoto(albumId) {
  const params = {
    pageNum: 0,
    pageSize: 0,
    status: 1,
    albumId,
  }
  return http.post('/mobile/template/photos/list', params)
}

export async function getVideo({ pageNum, pageSize }) {
  const params = {
    pageNum,
    pageSize,
  }
  return http.post('/mobile/template/video/list', params)
}
