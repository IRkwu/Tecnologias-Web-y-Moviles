import { useState } from 'react';
import useFetchSubjects from '../hooks/useFetchSubjects';
import { Table } from '@mantine/core';
import './MallaTable.css';

function MallaTable() {
  const { data, isLoading, error } = useFetchSubjects();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [hoveredSubject, setHoveredSubject] = useState(null);

  // Mostrar mensaje de carga, error o falta de datos
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  // Obtener y actualizar el estilo de la celda
  const getCellStyle = (subject) => {
    if (hoveredSubject && hoveredSubject.name === subject.name) {
      return { backgroundColor: '#E0E0E0'};
    }

    if (!selectedSubject) return {};

    if (selectedSubject.name === subject.name) {
      return { backgroundColor: '#C6E2E9' };
    } else if (selectedSubject.next.includes(subject.name)) {
      return { backgroundColor: '#A1CF6B' };
    } else if (selectedSubject.prev.includes(subject.name)) {
      return { backgroundColor: '#E87461' };
    }
  };

  // Cantidad de semestres
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  // Filtrar materias por semestre
  const filterBySemester = (semester) => {
    return data.filter((subject) => subject.semester === semester);
  };

  // Crear filas de la tabla con las materias de cada semestre
  const rows = Array.from({ length: 7 }).map((_, rowIndex) => (
    <Table.Tr key={rowIndex}>
      {semesters.map(semester => {
        const subject = filterBySemester(semester)[rowIndex];
        return (
          <Table.Td 
            key={semester}
            className="table-cell"
            style={subject ? getCellStyle(subject) : {}}
            onClick={() => {
              setSelectedSubject(subject);
              setHoveredSubject(null);
            }}
            onMouseEnter={() => setHoveredSubject(subject)}
          >
            {subject?.name || ''}
            </Table.Td>
          );
      })}
    </Table.Tr>
  ));

return (
  <Table withTableBorder withColumnBorders>
    <Table.Thead>
      <Table.Tr>
        {semesters.map(semester => (
          <Table.Th key={semester} className="table-header">
            {semester}°Semestre
          </Table.Th>
        ))}
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>{rows}</Table.Tbody>
  </Table>
  );
}

export default MallaTable;
