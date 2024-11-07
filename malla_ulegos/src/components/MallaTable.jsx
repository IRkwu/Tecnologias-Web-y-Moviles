import { React }from 'react';
import useFetchSubjects from '../hooks/useFetchSubjects';
import { Table } from '@mantine/core';
import './MallaTable.css';

function MallaTable() {
  const { data, isLoading, error } = useFetchSubjects();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const filterBySemester = (semester) => {
    return data.filter((subject) => subject.semester === semester);
  };

  const rows = Array.from({ length: 7 }).map((_, rowIndex) => (
    <Table.Tr key={rowIndex}>
      {semesters.map(semester => (
        <Table.Td key={semester} className="table-cell">
          {filterBySemester(semester)[rowIndex]?.name || ''}
        </Table.Td>
      ))}
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
