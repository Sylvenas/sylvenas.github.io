## 战报现状
在每个用户客户端机器上生成战报，上传nos，然后分享

## 痛点
- 每个用户都要在客户端生成图片，终端机器性能决定生成图片的loading，一般需要3s左右
- 每个用户生成之后，需要上传nos，可能遇到nos上传的并发瓶颈

## 方案1 服务端生成战报上传nos，传递前端
- 缺点：代码改造成本较高
- 优点：服务器环境稳定，能确定生成图片成功

- [Convert HTML to JPG, PNG, TIFF, or BMP Image in Java](https://blog.aspose.com/2021/01/11/html-webpage-string-to-image-jpg-png-java/)

- [HTML-to-BMP.java](https://gist.github.com/aspose-com-gists/5e71e1be8d062c0f8359bf90d5c71a04)

## 方案2 前端生成图片上传nos，并且传递消息给服务端，记录图片地址
- 优点：代码改造成本低
- 问题：不同的机器有不一样的表现，如何确定该图片的是否生成正确