/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Upload, Button, Form, message, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      uploading: false,
      loading: false,
      isPlay: true,
      isUse1: false,
      isUse2: false,
      fileList: [],
    }
  }

  handleUpload = async () => {
    const { fileList } = this.state;
    if (fileList.length < 2) {
      message.error("请传入文件");
    }
    else {
      const formData = new FormData();
      fileList.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });
      this.setState({
        uploading: true,
      });

      axios({
        url: 'http://10.73.18.36:8080/sendEmail',
        method: 'post',
        headers: {
          'Content-Type': ' multipart/form-data'
        },
        data: formData,
      }).then((res) => {
        const { address } = res.data
        console.log('返回的数据', res)
        this.setState({
          uploading: false,
          isPlay: false,
          url: address,
        });
      }).catch((error) => {
        console.log(error);
        this.setState({
          uploading: false,
        });
        message.error('上传失败，请检查上传文件是否正确');
      })
    }
  };

  // 下载
  onClick = () => {
    const { url } = this.state;
    this.setState({
      loading: true,
    });

    axios({
      method: 'GET',
      url: url,
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
      responseType: 'blob',      //--设置请求数据格式
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', 'excel.xlsx')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      this.setState({
        loading: false,
        isPlay: true,
      });
    }).catch((error) => {
      console.log(error);
      this.setState({
        loading: false,
      });
      message.error('下载失败，请重新尝试');
    })
  };

  beforeUpload1 = (file) => {
    const { isUse1 } = this.state;
    if (!isUse1) {
      this.setState(state => ({
        fileList: [...state.fileList, file],
        isUse1: true,
      }));
    }
    else {
      message.error('只能上传一个文件');
      this.setState(state => ({
        fileList: [...state.fileList],
      }));
    }
    return false;
  };

  beforeUpload2 = (file) => {
    const { isUse2 } = this.state;
    if (!isUse2) {
      this.setState(state => ({
        fileList: [...state.fileList, file],
        isUse2: true,
      }));
    }
    else {
      message.error('只能上传一个文件');
      this.setState(state => ({
        fileList: [...state.fileList],
      }));
    }
    return false;
  };


  render() {
    const { uploading, isPlay, loading, fileList } = this.state;
    return (
      <>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            label="集团IT员工的订单信息"
          >
            <Upload
              accept='.xls,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlt,.xml,.xlam,.xla,.xlw,.xlr'
              name='file1'
              beforeUpload={this.beforeUpload1}
              showUploadList={false}
            >
              <Button>
                <UploadOutlined />
            点击上传,支持Excel文件
          </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="集团IT员工的邮件地址"
          >
            <Upload
              accept='.xls,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlt,.xml,.xlam,.xla,.xlw,.xlr'
              name='file2'
              beforeUpload={this.beforeUpload2}
              fileList={fileList}
            >
              <Button>
                <UploadOutlined />
              点击上传,支持Excel文件
          </Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 2 }}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!isPlay}
                loading={uploading}
                onClick={this.handleUpload}
              >
                上传文件
              </Button>
              <Button
                onClick={this.onClick}
                loading={loading}
                disabled={isPlay}
              >
                下载日志文件
              </Button>
              <Button
                onClick={() => {
                  this.setState({
                    fileList: [],
                    isUse1: false,
                    isUse2: false,
                    isPlay: true,
                  })
                }}
              >
                清除
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </>
    )
  }

};

export default App;