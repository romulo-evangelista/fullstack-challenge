import { Card, Col, Row } from 'antd';
import React from 'react';

import Header from '../../../../components/Header';
import Form from '../../components/Form';

const Add: React.FC = () => {
  return (
    <>
      <Header title='Profissões' />

      <div className='professional-type-wrapper'>
        <Row gutter={16} className='professional-type-row'>
          <Col span={16}>
            <Card
              title='Nova Profissão'
              bordered={false}
            >
              <div className='professional-type-list-container'>
                <Form />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Add;
