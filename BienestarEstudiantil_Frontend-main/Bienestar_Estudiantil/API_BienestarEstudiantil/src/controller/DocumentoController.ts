import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { bienestarestudiantil_documentos } from '../entity/Documento';

class DocumentoController {
  static getDocumento = async (req: Request, resp: Response) => {
    try {
      const SolicitudCitaId = parseInt(req.params['id']);
      if (!SolicitudCitaId) {
        return resp
          .status(404)
          .json({ mensaje: 'No se ingresó el Id de Documento!' });
      }
      const DocumentosRepo = AppDataSource.getRepository(
        bienestarestudiantil_documentos
      );

      let Documento;
      try {
        Documento = await DocumentosRepo.findOneOrFail({
          where: { solicitud: { SolicitudId: SolicitudCitaId } },
          relations: { solicitud: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: 'No se encontró un documento con dicho ID' });
      }
      //Devolver Resultados de lista de Estudiante
      return resp.status(201).json(Documento);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}
export default DocumentoController;
