import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import uploadDownload from "../../middleware/uploadDownload";

const router = Router()

router.get('/', indexCtrl.BiodataCtrl.findAll) //nampilin seluruh data
router.post('/', uploadDownload.uploadFiles, indexCtrl.BiodataCtrl.create) //tambah data + foto
router.get('/file/:filename', uploadDownload.showFile) //nampilin foto
router.get('/:id', indexCtrl.BiodataCtrl.findOne) //nampilin data berdsarkan id
router.put('/:id', uploadDownload.uploadFiles, indexCtrl.BiodataCtrl.update)  //edit data
router.delete('/:id', indexCtrl.BiodataCtrl.deleted)  //hapus data

export default router
