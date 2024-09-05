import TrabalhoDAO from "../dao/TrabalhoDAO";
import AutorDAO from "../dao/AutorDAO";
import { AppDataSource } from "../data-source";
import AutorDAO from "../dao/AutorDAO";
import { Autor } from "../entity/Autor";
import { Trabalho } from "../entity/Trabalho";

export default class Controller{
    constructor(){
       await AppDataSource.transaction(async (transactionalEntityManeger) =>{
        const trabalhoDAO = new TrabalhoDAO();
        const AutorDAO = new AutorDAO();

        const autor1 = await AutorDAO.salvar(autor1)
        const autor2 = await AutorDAO.salvar(autor2);
        const autores: Autor [] = [autorSalvo1, autorSalvo2];

        const trabalho: Trabalho ={ 
            titulo, area, codigo, autores
        }

        const trabalhoSalvo = await trabalhoDAO.salvar(trabalho)
       })
    }
}