import { Request, Response } from 'express';
import { bienestarestudiantil_referencias } from '../entity/Referencia';
import { bienestarestudiantil_evaluaciones } from '../entity/Evaluacion';
import { AppDataSource } from '../data-source';
import { validate } from 'class-validator';

class ReferenciaController {
  static getReferencia = async (req: Request, resp: Response) => {
    try {
      const EvaluacionId = parseInt(req.params['id']);

      if (!EvaluacionId) {
        return resp
          .status(404)
          .json({ mensaje: 'No se Indica el ID de Evaluación' });
      }

      const referenciasRepo = AppDataSource.getRepository(
        bienestarestudiantil_referencias
      );

      const evaluacionesRepo = AppDataSource.getRepository(
        bienestarestudiantil_evaluaciones
      );

      const evaluacion = await evaluacionesRepo.findOne({
        where: { EvaluacionId },
      });
      if (!evaluacion) {
        return resp.status(404).json({ mensaje: 'Evaluación Inexistente!' });
      }

      const listaReferencias = await referenciasRepo.find({
        where: {
          EvaluacionId: { EvaluacionId },
        },
        relations: { EvaluacionId: true },
      });

      if (listaReferencias.length == 0) {
        return resp.status(404).json({
          mensaje: 'No se encontró resultado',
        });
      }

      return resp.status(200).json(listaReferencias);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  static getReferencias = async (req: Request, resp: Response) => {
    try {
      const referenciasRepo = AppDataSource.getRepository(
        bienestarestudiantil_referencias
      );

      const evaluacionesRepo = AppDataSource.getRepository(
        bienestarestudiantil_evaluaciones
      );

      const listaReferencias = await referenciasRepo.find({
        where: {
          AreaReferente: 'Psicologia',
        },
        relations: { EvaluacionId: true },
      });

      if (listaReferencias.length == 0) {
        return resp.status(404).json({
          mensaje: 'No se encontró resultado',
        });
      }

      return resp.status(200).json(listaReferencias);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };

  static addReferencia = async (req: Request, resp: Response) => {
    /*********************** */
    //destructor
    try {
      const {
        ReferenciaId,
        Entidad,
        AreaReferente,
        EvaluacionId,
        UniversalUniqueIdentifier,
        LastUser,
        LastUpdate,
      } = req.body;
      //Validaciciónes de datos de entrada

      if (!EvaluacionId) {
        return resp.status(404).json({
          mensaje: 'Debe de indicar la identicación de evaluación',
        });
      }
      if (!Entidad) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe de indicar la entidad referente ' });
      }
      if (!AreaReferente) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe de indicar el area referente' });
      }
      //Tomar repositorios, en este caso hay que tomar 4 repositorios
      //ya que dicha entidad cuenta con 3 llaves foranía de otras tablas
      //y se debe de validar la existencia de los atributos
      const referenciaEntidad = AppDataSource.getRepository(
        bienestarestudiantil_referencias
      );

      const evaluacionEntidad = AppDataSource.getRepository(
        bienestarestudiantil_evaluaciones
      );
      let referencia, evaluacion;

      //Validaciónes de regla de negocios
      referencia = await referenciaEntidad.findOne({
        where: { ReferenciaId },
      });
      evaluacion = await evaluacionEntidad.findOne({
        where: { EvaluacionId },
      });

      try {
        //verificar si el color existe
        evaluacion = await evaluacionEntidad.findOneOrFail({
          where: { EvaluacionId },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: 'No se encontra ningun tipo de evaluacion con ese ID',
        });
      }

      //Intanciar el objecto
      let newReferencias = new bienestarestudiantil_referencias();
      const fechaActual = new Date();
      newReferencias.ReferenciaId = ReferenciaId; //asignar los datos
      newReferencias.Entidad = Entidad;
      newReferencias.AreaReferente = AreaReferente;
      newReferencias.EvaluacionId = EvaluacionId;
      newReferencias.LastUser = LastUser;
      newReferencias.UniversalUniqueIdentifier = 'UUID';
      newReferencias.LastUpdate = fechaActual;

      await referenciaEntidad.save(newReferencias); //Guardar en la entidad vehiculo
      return resp
        .status(200)
        .json({ mensaje: 'La referencia se ha efectuado' });
    } catch (error) {
      return resp.status(400).json({ error });
    }
  };
  static updateReferencia = async (req: Request, resp: Response) => {
    /*********************** */
    //destructor
    try {
      const EvaluacionId = parseInt(req.params['id']);
      if (!EvaluacionId) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe indicar la Identificación' });
      }
      const {
        ReferenciaId,
        Entidad,
        AreaReferente,
        UniversalUniqueIdentifier,
        LastUser,
        LastUpdate,
      } = req.body;
      //Validaciciónes de datos de entrada

      if (!Entidad) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe de indicar la entidad referente ' });
      }
      if (!AreaReferente) {
        return resp
          .status(404)
          .json({ mensaje: 'Debe de indicar el area referente' });
      }
      //Tomar repositorios, en este caso hay que tomar 4 repositorios
      //ya que dicha entidad cuenta con 3 llaves foranía de otras tablas
      //y se debe de validar la existencia de los atributos
      const referenciaEntidad = AppDataSource.getRepository(
        bienestarestudiantil_referencias
      );

      const evaluacionEntidad = AppDataSource.getRepository(
        bienestarestudiantil_evaluaciones
      );
      let referencia: bienestarestudiantil_referencias;
      let evaluacion;

      //Validaciónes de regla de negocios
      try {
        referencia = await referenciaEntidad.findOneOrFail({
          where: { ReferenciaId },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: 'No se encuentra dicha referencia!' });
      }
      evaluacion = await evaluacionEntidad.findOne({
        where: { EvaluacionId },
      });

      try {
        //verificar si el color existe
        evaluacion = await evaluacionEntidad.findOneOrFail({
          where: { EvaluacionId },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: 'No se encontra ningun tipo de evaluacion con ese ID',
        });
      }

      //Intanciar el objecto
      const fechaActual = new Date();
      referencia.ReferenciaId = ReferenciaId; //asignar los datos
      referencia.Entidad = Entidad;
      referencia.AreaReferente = AreaReferente;
      referencia.EvaluacionId = evaluacion;
      referencia.LastUser = LastUser;
      referencia.UniversalUniqueIdentifier = 'UUID';
      referencia.LastUpdate = fechaActual;

      await referenciaEntidad.save(referencia); //Guardar en la entidad vehiculo
      return resp
        .status(200)
        .json({ mensaje: 'La referencia se ha efectuado' });
    } catch (error) {
      return resp.status(400).json({ error });
    }
  };
  static deleteReferencia = async (req: Request, resp: Response) => {};
}

export default ReferenciaController;
