// 引入ffmpeg-static包
import ffmpeg from 'ffmpeg-static';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

/**
 * 使用FFmpeg转换视频格式的异步函数
 * @param {string} inputPath - 输入文件路径
 * @param {string} outputPath - 输出文件路径
 * @returns {Promise<string>} - 转换结果信息
 */
async function convertVideo(inputPath, outputPath) {
  const execPromise = promisify(exec);

  try {
    // 执行FFmpeg命令
    const { stdout, stderr } = await execPromise(`${ffmpeg} -i ${inputPath} ${outputPath}`);
    return `转换成功！\n标准输出：${stdout}\n错误输出：${stderr}`;
  } catch (error) {
    return `转换失败：${error.message}`;
  }
}

/**
 * 主函数，演示FFmpeg的使用
 */
async function main() {
  console.log('FFmpeg路径:', ffmpeg);

  // 这里只是演示，实际使用时需要提供有效的输入文件
  const inputFile = 'input.mp4';
  const outputFile = 'output.avi';

  console.log(`开始转换 ${inputFile} 到 ${outputFile}...`);
  const result = await convertVideo(inputFile, outputFile);
  console.log(result);
}

// 运行主函数
main().catch(console.error);