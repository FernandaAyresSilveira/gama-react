import React, { useEffect,useState } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

export default function Repositories(){
    const [ repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        //localStorage.clear();
    }, []);
    return(
        <S.Container>
        <S.Title>Repositórios</S.Title>
        <S.List>
            <S.ListItem>Repositório: Nome Repositório </S.ListItem>
            {
                repositories.map( repository =>{
                    return(
                        <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                })
            }
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>

    )
}