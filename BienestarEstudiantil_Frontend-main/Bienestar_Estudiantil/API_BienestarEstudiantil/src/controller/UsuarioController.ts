import { Request, Response, response } from "express";
import { AppDataSource } from "../data-source";
import { bienestarestudiantil_usuarios } from "../entity/User";
import { validate } from "class-validator";
import { bienestarestudiantil_roles } from "../entity/Rol";
import { bienestarestudiantil_profesionales } from "../entity/Profesional";

class Usuario_Controller {
  static getAll = async (Request: Request, Response: Response) => {
    try {
      const usuariosRepo = AppDataSource.getRepository(
        bienestarestudiantil_usuarios
      );
      const listaUsuarios = await usuariosRepo.find({});

      if (listaUsuarios.length == 0) {
        return Response.status(404).json({
          mensaje: "No se encontró resultado",
        });
      }

      return Response.status(200).json(listaUsuarios);
    } catch (error) {
      return Response.status(400).json({ mensaje: error });
    }
  };
  static getById = async (Request: Request, Response: Response) => {
    try {
      const UsuarioId = parseInt(Request.params["id"]);

      if (!UsuarioId) {
        return Response.status(404).json({ mensaje: "No se Indica el ID" });
      }

      const usuariosRepo = AppDataSource.getRepository(
        bienestarestudiantil_usuarios
      );
      let usuario;
      try {
        usuario = await usuariosRepo.findOneOrFail({
          where: { UsuarioId },
          relations: { rol: true, profesional: true },
        });
        return Response.status(200).json({ usuario });
      } catch (error) {
        return Response.status(404).json({
          mensaje: "No se encontró al usuario con ese ID",
        });
      }
    } catch (error) {
      return Response.status(400).json({ mensaje: error });
    }
  };
  static add = async (Request: Request, Response: Response) => {
    try {
      //DESTRUCTURING
      const {
        NombreDeUsuario,
        password,
        ProfesinalId,
        UniversalUniqueIdentifier,
        LastUser,
        rol,
      } = Request.body;

      const usuariosRepo = AppDataSource.getRepository(
        bienestarestudiantil_usuarios
      );
      const rolesRepo = AppDataSource.getRepository(bienestarestudiantil_roles);
      let ro: bienestarestudiantil_roles;

      const profesionaRepo = AppDataSource.getRepository(
        bienestarestudiantil_profesionales
      );
      let prof: bienestarestudiantil_profesionales;

      const user = await usuariosRepo.findOne({
        where: { NombreDeUsuario },
      });
      if (user) {
        return Response.status(404).json({ mensaje: "Usuario Existente" });
      }
      try {
        ro = await rolesRepo.findOneOrFail({ where: { RolId: rol } });
      } catch (error) {
        return response.status(404).json({ mensaje: "Rol Inexistente" });
      }
      try {
        prof = await profesionaRepo.findOneOrFail({
          where: { ProfesionalId: ProfesinalId },
        });
      } catch (error) {
        return response
          .status(404)
          .json({ mensaje: "Profesional Inexistente" });
      }
      let fecha = new Date();
      let usuario = new bienestarestudiantil_usuarios();
      usuario.NombreDeUsuario = NombreDeUsuario;
      usuario.Contrasenha = password;
      usuario.profesional = prof;
      usuario.UniversalUniqueIdentifier = UniversalUniqueIdentifier;
      usuario.LastUser = LastUser;
      usuario.LastUpdate = fecha;
      usuario.rol = ro;

      //VALIDAR CON CLASS VALIDATOR
      const errors = await validate(usuario, {
        validationError: { target: false, value: false },
      });
      if (errors.length > 0) {
        return Response.status(400).json(errors);
      }

      usuario.hashPassword();

      try {
        await usuariosRepo.save(usuario);
        return Response.status(201).json({ mensaje: "Usuario Creado" });
      } catch (error) {
        response.status(400).json(error);
      }
    } catch (error) {
      return Response.status(404).json({ mensaje: "Error Desconocido....." });
    }
  };
  static update = async (Request: Request, Response: Response) => {
    try {
      const UsuarioId = parseInt(Request.params["id"]);
      if (!UsuarioId) {
        return Response.status(404).json({ mensaje: "No se Indica el ID" });
      }
      //DESTRUCTURING
      const {
        NombreDeUsuario,
        password,
        ProfesinalId,
        UniversalUniqueIdentifier,
        LastUser,
        rol,
      } = Request.body;

      const usuariosRepo = AppDataSource.getRepository(
        bienestarestudiantil_usuarios
      );
      const rolesRepo = AppDataSource.getRepository(bienestarestudiantil_roles);
      let ro: bienestarestudiantil_roles;

      const profesionaRepo = AppDataSource.getRepository(
        bienestarestudiantil_profesionales
      );
      let prof: bienestarestudiantil_profesionales;

      let user: bienestarestudiantil_usuarios;

      try {
        user = await usuariosRepo.findOneOrFail({ where: { UsuarioId } });
      } catch (error) {
        return response
          .status(404)
          .json({ mensaje: "No se encontró Dicho usuario" });
      }
      try {
        ro = await rolesRepo.findOneOrFail({ where: { RolId: rol } });
      } catch (error) {
        return response.status(404).json({ mensaje: "Rol Inexistente" });
      }
      try {
        prof = await profesionaRepo.findOneOrFail({
          where: { ProfesionalId: ProfesinalId },
        });
      } catch (error) {
        return response
          .status(404)
          .json({ mensaje: "Profesional Inexistente" });
      }
      let fecha = new Date();
      user.NombreDeUsuario = NombreDeUsuario;
      user.Contrasenha = password;
      user.profesional = ProfesinalId;
      user.UniversalUniqueIdentifier = UniversalUniqueIdentifier;
      user.LastUser = LastUser;
      user.LastUpdate = fecha;
      user.rol = ro;

      //VALIDAR CON CLASS VALIDATOR
      const errors = await validate(user, {
        validationError: { target: false, value: false },
      });
      if (errors.length > 0) {
        return Response.status(400).json(errors);
      }

      user.hashPassword();

      try {
        await usuariosRepo.save(user);
        return Response.status(201).json({ mensaje: "Usuario Actualizado" });
      } catch (error) {
        response.status(400).json(error);
      }
    } catch (error) {
      return Response.status(404).json({ mensaje: "Error Desconocido....." });
    }
  };
  static delete = async (Request: Request, Response: Response) => {
    try {
      const UsuarioId = parseInt(Request.params["id"]);
      if (!UsuarioId) {
        return Response.status(404).json({ mensaje: "No se Indica el ID" });
      }
      const usuariosRepo = AppDataSource.getRepository(
        bienestarestudiantil_usuarios
      );
      let usuario: bienestarestudiantil_usuarios;
      try {
        usuario = await usuariosRepo.findOneOrFail({
          where: { UsuarioId },
        });
      } catch (error) {
        return Response.status(404).json({
          mensaje: "No se encontró el cliente con ese ID",
        });
      }
      // usuario.estado = false;
      try {
        await usuariosRepo.save(usuario);
        return Response.status(200).json({ mensaje: "Cliente Eliminado!" });
      } catch (error) {
        return Response.status(400).json({ mensaje: "No se pudo Eliminar..." });
      }
    } catch (error) {
      return Response.status(404).json({ mensaje: error });
    }
  };
}
export default Usuario_Controller;
