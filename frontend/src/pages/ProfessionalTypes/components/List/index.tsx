import { DeleteTwoTone, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../../services/api';

import { ListInterface } from '../../../../shared/Interfaces/List.interface';
import { IProfessionalType } from '../../professional-type.interface';

const List: React.FC<ListInterface> = ({ title = 'Profissões' }: ListInterface) => {
  const [professionalTypes, setProfessionalTypes] = useState<IProfessionalType[]>([]);
  
  useEffect(() => {
    loadProfessionalTypes()
  }, [])

  const loadProfessionalTypes = async () => {
    const response = await api.get('/professional-type');
    setProfessionalTypes(response.data);
  }
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Situação',
      dataIndex: 'situation',
      key: 'situation',
      render: (situation: boolean) => {
        return situation ? 'Ativo' : 'Inativo'
      }
    },
    {
      title: 'Ações',
      dataIndex: 'id',
      key: 'actions',
      render: (id: number) => (
        <div key={id} className='professional-type-list-actions'>
          <Link to={{ pathname: `/professional-types-edit/${id}` }}><EditOutlined /></Link>
          <DeleteTwoTone
            onClick={
              async () => {
                await api.delete(`/professional-type/${id}`);
                loadProfessionalTypes();
              }
            }
            twoToneColor='#eb2f96'
          />
        </div>
      ),
    },
  ];
  
  return (
    <Card
      title={title}
      hoverable
      extra={<Link to="/professional-types-add"><PlusOutlined /></Link>}
    >
      <Table dataSource={professionalTypes} columns={columns} pagination={false} />
    </Card>
  );
}

export default List;
