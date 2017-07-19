<?php

class Db{
    private static $instance = NULL;
    private $curr_hander = NULL;
    private $lastqueryid = NULL;
    private $sql = NULL;

    static public function getInstance() {
        if (! (self::$instance instanceof self)) {
            self::$instance = new self ();
            self::$instance->connect();
        }
        return self::$instance;
    }

    private function connect() {
        $_config = array('db_host'=>'10.66.159.93','db_user'=>'root','db_password'=>'jiguozhidx2016#','db_select'=>'zdm','charset'=>'utf8');
        try {
            $this->curr_hander = @mysql_connect ( $_config ['db_host'], $_config ['db_user'], $_config ['db_password'] );
            if($this->curr_hander===false){
                throw new ErrorException('数据库连接错误！');
            }
            $select_db_result = mysql_select_db ( $_config ['db_select'], $this->curr_hander );
            if($select_db_result===false){
                throw new ErrorException('数据库选择错误！'.mysql_error($this->curr_hander).mysql_error($this->curr_hander));
            }
            mysql_query ( "SET NAMES '" . str_replace ( '-', '', $_config ['charset'] ) . "'", $this->curr_hander );
        } catch (Exception $e) {
            throw new ErrorException('数据库连接出错！');
        }
        return $this->curr_hander;
    }


    public function query($sql = '', $link_type = MYSQL_ASSOC) {
        $this->sql = trim ( $sql );

        $this->lastqueryid = mysql_query ( $this->sql, $this->curr_hander );

        if ($this->lastqueryid===false) {
            trigger_error(mysql_errno($this->curr_hander ).mysql_error($this->curr_hander ).',SQL:'.$this->sql,E_USER_ERROR);
            exit;
        }
        $fix = strtoupper ( substr ( $sql, 0, 6 ) );
        if (in_array ( $fix, array ('UPDATE','INSERT','DELETE','REPLAC' ) )) {
            return $this->_getRows ();
        }
        if ( is_bool($this->lastqueryid) ) {
            return $this->lastqueryid;
        }
        $result = array ();
        while ( ! ! $row = mysql_fetch_array ( $this->lastqueryid, $link_type ) ) {
            $result [] = $row;
        }
        $this->_freeRsult ();
        return $result;
    }

    public function count($table,$where='1') {
        $data = $this->query('SELECT COUNT(*) AS count FROM ' .$table. ' WHERE ' . $where);
        return isset($data[0]['count'])?$data[0]['count']:0;
    }

    public function getSql() {
        return $this->sql;
    }

    public function close() {
        if (is_resource ( $this->lastqueryid )) {
            return mysql_close ( $this->lastqueryid );
        }
        return mysql_close ();
    }


    public function _getRows() {
        if (is_resource ( $this->lastqueryid )) {
            return mysql_affected_rows ( $this->lastqueryid );
        }
        return mysql_affected_rows ();
    }

    private function _freeRsult() {
        if (is_resource ( $this->lastqueryid )) {
            mysql_free_result ( $this->lastqueryid );
            $this->lastqueryid = null;
        }
    }

    /**
     * 将键值对数组转换为键值对字符串,专门用于插入数据
     * @param unknown $keyValu
     * @return multitype:|string
     */
    public function arrayToStrKeyInsert($keyValu) {
        if (is_string($keyValu)){
            return $keyValu;
        }elseif (is_array($keyValu)){
            $temp1 = $temp2 = '';
            $i = 0;
            $_count = count($keyValu);
            foreach ( $keyValu as $key => $val ) {
                if ($i < $_count - 1) {
                    $temp1 = $temp1 . $key . ',';
                    $temp2 = $temp2 . '"' . $val . '"' . ',';
                } else {
                    $temp1 = $temp1 . $key;
                    $temp2 = $temp2 . '"' . $val . '"';
                }
                $i ++;
            }
            return array($temp1,$temp2);
        }
    }
}


date_default_timezone_set('UTC');
//每天一个手机号码最大条数
define('__DAY_COUNT_MSM_NUM_PHONE__',3);
//每天一个IP最大条数
define('__DAY_COUNT_MSM_NUM_IP__',15);
//验证码长度
define('__MSM_LEN__',6);

if(0){
    exit('报名已结束');
}
ini_set('display_errors','1');
error_reporting(E_ALL);


function insertData(){

    $phone = trim(isset($_POST['apply']['phone'])?$_POST['apply']['phone']:'');
    if(!preg_match('/^1(3|4|5|7|8)\d{9}$/',$phone)){
        $data = array(
            'status'        => -5,
            'message'       => '请填写正确的手机号码'
        );
        exit(json_encode($data));
    }

    $media = trim(isset($_POST['apply']['media'])?$_POST['apply']['media']:'');

    $name = trim(isset($_POST['apply']['name'])?$_POST['apply']['name']:'');
    if( strlen($name)<2 ){
        $data = array(
            'status'        => -6,
            'message'       => '请正确填写姓名，只能为中文'
        );
        exit(json_encode($data));
    }

    $weixin = trim(isset($_POST['apply']['weixin'])?$_POST['apply']['weixin']:'');
    $email = trim(isset($_POST['apply']['email'])?$_POST['apply']['email']:'');
    $company = trim(isset($_POST['apply']['company'])?$_POST['apply']['company']:'');
    $job = trim(isset($_POST['apply']['job'])?$_POST['apply']['job']:'');
    $article = trim(isset($_POST['apply']['article'])?$_POST['apply']['article']:'');
    $product = trim(isset($_POST['apply']['product'])?$_POST['apply']['product']:'');

    $db = Db::getInstance();
    $data = array(
        'phone'=>$phone,
        'addtime'=>time(),
        'name'=>$name,
        'weixin'=>$weixin,
        'email'=>$email,
        'company'=>$company,
        'job'=>$job,
        'media'=>$media,
        'article'=>$article,
        'product'=>$product,
        'status'=>0,
        'ischeck'=>0
    );

    if(count($db->query('SELECT * from park_attendees WHERE phone="'.$data['phone'].'"'))>0){
        $data = array(
            'status'        => -1,
            'data'          => '',
            'message'       => '该手机号码已经注册'
        );
        exit(json_encode($data));
    }
    $getKeyArray = $db->arrayToStrKeyInsert($data);
    $sql = 'INSERT INTO park_attendees('.$getKeyArray[0].')VALUE('.$getKeyArray[1].')';
    if( $db->query($sql) ){
        $data = array(
            'status'    => 0,
            'message'   => '报名成功'
        );
        exit(json_encode($data));
    }
    $data = array(
        'status'        => -2,
        'message'       => '系统错误'
    );
    exit(json_encode($data));
}

//保存数据
insertData();





























