import React, { Component, createElement } from "react";
import {
  Comment,
  Tooltip,
  Avatar,
  Divider,
  Input,
  Form,
  Button,
  Upload,
  message,
} from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./index.less";

const { TextArea } = Input;

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      action: null,
      text: "",
      loading: false,
    };
  }

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: "liked",
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: "disliked",
    });
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onFinish = (values) => {
    console.log("Success:", values);
  };

  // 提交失败
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  actions = () => {
    const { likes, dislikes, action } = this.state;
    return (
      <>
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={this.like}>
            {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={this.dislike}>
            {React.createElement(
              action === "disliked" ? DislikeFilled : DislikeOutlined
            )}
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>
        <span key="comment-basic-reply-to">Reply to</span>
      </>
    );
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { text, imageUrl } = this.state;
    return (
      <>
        <Comment
          actions={this.actions}
          style={{ backgroundColor: "white" }}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Divider orientation="left">写评论</Divider>
        <Form
          ref={this.formRef}
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 22 }}
          name="comment"
          style={{ backgroundColor: "white" }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item label="头像" name="pic">
            <Upload
              name="avatar"
              fileList={''}
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={this.beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item
            label="用户名"
            name="user"
            rules={[{ required: true, message: "请输入用户名/昵称" }]}
          >
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="tel"
            rules={[{ required: true, message: "请输入手机号" }]}
          >
            <Input style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="评论"
            name="comment"
            rules={[{ required: true, message: "请输入内容" }]}
          >
            <TextArea
              value={text}
              style={{ resize: "none" }}
              onChange={this.onChange}
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default Comments;
