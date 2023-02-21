


const Table = ({ data, column}) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => <TableRow item={item} column={column}/>)}
      </tbody>
    </table>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column}) => (
  
  <tr>
    
    {column.map((columnItem) => {
    
      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') 
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
             
      }
      
      if (columnItem.value === "actionColumn") return <td>{item[`${columnItem.value}`]}<button>prueba</button><span>Eliminar</span></td>
      else return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)


export default Table;

/*
const [document, setDocument] = useState({
  img: "",
  Titulo: "",
  Autor: "",
  createdAt: "",
  descripcion: "",
  Genero: "",
  _id: "",
});
const params = useParams();
useEffect(() => {
  (async () => {
    setIsLoading(true);
    const res = await axios.get(`http://localhost:4000/api/documentos/${params.id}`)
    setIsLoading(false);
    setDocument(res.data);
  })();
  //console.log("works")
}, [params.id]);


const ImageDetails = () => {
  const [image, setImage] = useState({
    title: "",
    url: "",
    _id: "",
  });
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/images/${params.id}`);
      setImage(res.data);
      // console.log(res.data);
    })();
    console.log("works") 
  }, [params.id]);

  const handleDelete = async () => {
    const res = await axios.delete(`/api/images/${params.id}`);
    console.log(res)
  }
*/
/*




export const userRows = [
  
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Activo",
    email: "1snow@gmail.com",
    matricula: 23324,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "Activo",
    matricula: 244423,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "Pendiente",
    matricula: 343555,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "Revision",
    matricula: 356774,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "Activo",
    matricula: 57998,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "Pendiente",
    matricula: 246678,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "Revision",
    matricula: 256799,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "Activo",
    matricula: 976533,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Pendiente",
    matricula: 345456,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Pendiente",
    matricula: 436467,
  },
];


export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Usuario",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "matricula",
      headerName: " Matricula",
      width: 100,
    },
    {
      field: "status",
      headerName: "Estatus",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

  */