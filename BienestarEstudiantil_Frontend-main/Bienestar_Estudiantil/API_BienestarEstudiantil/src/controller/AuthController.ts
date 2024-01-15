import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { bienestarestudiantil_usuarios } from "../entity/User";
import * as jwt from "jsonwebtoken";
class AuthController {
  static login = async (req: Request, resp: Response) => {
    const { NombreDeUsuario, password } = req.body;
    try {
      if (!(NombreDeUsuario || password)) {
        return resp
          .status(400)
          .json({ mensaje: "Usuario o contraseña incorrecta." });
      }
      const repoUsuario = AppDataSource.getRepository(
        bienestarestudiantil_usuarios
      );
      let usuario: bienestarestudiantil_usuarios;
      try {
        usuario = await repoUsuario.findOneOrFail({
          where: { NombreDeUsuario },
        });
      } catch (error) {
        return resp
          .status(400)
          .json({ mensaje: "Usuario o contraseña Incorrecta" });
      }
      if (usuario.checkPassword(password)) {
        return resp
          .status(400)
          .json({ mensaje: "Usuario o contraseña incorrecta" });
      }
      const token = jwt.sign({ idUsuario: usuario.UsuarioId }, "utnkey1234", {
        expiresIn: "5m",
      });
      return resp.status(200).json({
        token,
        role: usuario.rol,
        idUsuario: usuario.UsuarioId,
      });
    } catch (error) {
      return resp.status(400).json({ error });
    }
  };
}
export default AuthController;
