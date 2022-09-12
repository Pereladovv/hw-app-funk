function MaterialData(props) {

    const { materials } = props

    if (!materials || materials.length === 0) return <p>Нет данных.</p>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        materials.map((material) =>
                            <tr key={materials.id}>
                                <td>{materials.title}</td>
                                <td>{materials.value}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
      </div>
    )
}

export default MaterialData