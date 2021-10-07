import { useEffect, useState } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import './termosNaoRespondidos.css'
import AdminService from '../../../../services/admin.service.js';

export function TermosNaoRespondidos() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        listarUsuariosTermoNaoAtualizado()
    }, [])

    async function listarUsuariosTermoNaoAtualizado() {
        await AdminService.listaUsuariosSemTermoAtualizado().then(
            res => {
                setUsuarios(res.data)
            },
            (error) => {
                const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              alert(resMessage);
            }
        )

    }  

    const handleEnviarEmais = async (e) => {
        e.preventDefault();
        await AdminService.sendMail().then(
          () => {
            listarUsuariosTermoNaoAtualizado()
            alert('Emails enviados com sucesso');
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            alert(resMessage);
          }
        );
      };

    function listarUsuariosNaTabela() {
        return (
            usuarios.map(usuario => {
                return (
                    <tr>
                        <td>{usuario.nome}</td>
                        <td>{usuario.telefone}</td>
                        <td>{usuario.userUnico}</td>
                    </tr>
                )
            })
        )
    }

    function mostrarTabelaUsuarios() {
        return (
            <>
            <div className='container-table' >
                <div align='right' className='button-enviar-emails'>
                    <Button variant="danger" onClick={handleEnviarEmais}>Enviar E-mails</Button>
                </div>
                <Table striped bordered hover className='table'>
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.length > 0 && listarUsuariosNaTabela()}
                    </tbody>
                </Table>
            </div>
            </>
        )
    }

    function mostrarMensagemZeroUsuarios() {
        return (
            <>
                <Alert className='alert' variant={'warning'}>
                   Nenhum item encontrado
                </Alert>   
            </>
        )
    }

    return (
        <div>
            {usuarios.length > 0 && mostrarTabelaUsuarios()}
            {usuarios.length === 0 && mostrarMensagemZeroUsuarios()}
        </div>
    )
}