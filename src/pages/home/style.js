import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;// 触发BFC
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-left: 30px;
  width: 625px;
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  &.noneImg {
    width: 625px;
  }
  .title {
    line-height:18px;
    font-weight: bold;
    font-size: 18px;
    color: #333;
    margin-bottom: 4px;
  }
  .desc {
    line-height: 24px; 
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 30px 0;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 280px;
  height: 300px;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius:20px;
  cursor: pointer;
`;

export const BackupTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 60px;
  font-size: 12px;
  cursor: pointer;
`;