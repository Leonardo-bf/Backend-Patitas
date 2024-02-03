import { Router } from "express";
import clienteController from "../controllers/clienteController";
import fidelidadeController from "../controllers/fidelidadeController";
import produtoController from "../controllers/produtoController";

const router = Router();

router.post("/cliente", clienteController.create);
router.get("/clientes", clienteController.read);
router.get("/cliente/:id", clienteController.readonly);
router.put("/cliente/:id", clienteController.update);
router.delete("/cliente/:id", clienteController.destroy);
router.put("/addfcliente/:id", clienteController.adicionarFidelidade);
router.put("/rmvfcliente/:id", clienteController.removerFidelidade);
//Fidelidade
router.post("/fidelidade", fidelidadeController.create);
router.get("/fidelidades", fidelidadeController.read);
router.get("/fidelidade/:id", fidelidadeController.readonly);
router.put("/fidelidade/:id", fidelidadeController.update);
router.delete("/fidelidade/:id", fidelidadeController.destroy);
//Produto
router.post("/produto", produtoController.create);
router.get("/produtos", produtoController.read);
router.get("/produto/:id", produtoController.readonly);
router.put("/produto/:id", produtoController.update);
router.delete("/produto/:id", produtoController.destroy);
router.put("/addcliente/:id", produtoController.adicionarCliente);
router.put("/rmvcliente/:id", produtoController.removerCliente);






export default router;