import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, FormattedMessage, formatMessage } from 'umi';

const { RangePicker } = DatePicker;
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';
const BasicForm = (props) => {
  const {dispatch,formInfo}=props
  const [num,setNum]=React.useState(0)

  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 10, span: 10 },
  };

  //函数
  const onFinish = values => {
    console.log(values);
    //dispatch存在
    // if (dispatch) {
    //   dispatch({
    //     type: 'basicFormModel/saveFormData',
    //     payload: values,
    //   });
    // }
    // setNum(values.note)
    let formInfo = {
        clientName: values.clientName,
        pageNum:1,
        pageSize:10
      };

    if (dispatch) {
      dispatch({
        type: 'basicFormModel/submitForm',
        payload: formInfo,
      });
    }
  };
  const onReset = () => {
    form.resetFields();
  };




  return (
    // content 显示面包屑文字
    <PageHeaderWrapper>
        <Card bordered={false}  >
          <Form {...layout} form={form} name="control-hooks"  onFinish={onFinish} style={{marginTop:8}}>
            <Form.Item name="clientName" label="客户名称"  rules={[{ required: true ,message: '客户名称不能为空'}]}>
              <Input placeholder = {'请输入客户名'} />
            </Form.Item>

            <Form.Item name="startTimeAndStopTime" label="起止日期" rules={[{ required: false,message: '起止时间不能为空' }]}>
              <RangePicker showTime   style={{width:'100% '}}/>
            </Form.Item>

            <Form.Item  label="标题" >
              <Input placeholder = {num} />
            </Form.Item>

            <Form.Item className={styles.selectBox} style={{display:num =='1'?'block':'none'}}>
              <Radio.Group className={styles.radioSet}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item {...tailLayout}>
              {/*htmlType="submit" 默认绑定表单的onFinish函数*/}
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button type="link" htmlType="button" >
                Fill form
              </Button>
            </Form.Item>






          </Form>
        </Card>
    </PageHeaderWrapper>

  );
};

// loading是一个固定的传参，表示传输状态
// formAndbasicForm 你要访问的命名空间
export default connect(({ basicFormModel }) => ({
  formInfo: basicFormModel.formInfo,
}))(BasicForm);
