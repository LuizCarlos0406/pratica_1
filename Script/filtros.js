function aplicarFiltro() {
    const status = document.getElementById("filtroStatus").value;
    const criticidade = document.getElementById("filtroCriticidade").value;

    fetch(`php/consulta_chamados.php?status=${status}&criticidade=${criticidade}`)
        .then(response => response.json())
        .then(data => {
            const tabela = document.getElementById("tabelaChamados");
            tabela.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Descrição</th>
                    <th>Criticidade</th>
                    <th>Status</th>
                    <th>Data de Abertura</th>
                    <th>Colaborador</th>
                </tr>
            `;

            data.forEach(chamado => {
                const row = tabela.insertRow();
                row.innerHTML = `
                    <td>${chamado.id}</td>
                    <td>${chamado.cliente_nome}</td>
                    <td>${chamado.descricao}</td>
                    <td>${chamado.criticidade}</td>
                    <td>${chamado.status}</td>
                    <td>${chamado.data_abertura}</td>
                    <td>${chamado.colaborador_nome || 'Não atribuído'}</td>
                `;
            });
        });
}
