function Pessoa (props){
    return <div>
<h2>Nome: {props.nome}</h2>
<p>Idade: {props.idade}</p>
<p>Profissão: {props.profissão}</p>
<p>Estudando: {props.estudando}</p>
    </div>
}

export default Pessoa