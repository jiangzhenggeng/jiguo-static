<?php
/*
Uploadify
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

// Define a destination
$targetFolder = '/assets/data/uploadify/'.date('Ymd',time()); // Relative to the root

$verifyToken = md5('unique_salt' . $_POST['timestamp']);
$type = $_GET['type'];

if (!empty($_FILES) && $_POST['token'] == $verifyToken) {

    $tempFile = $_FILES['Filedata']['tmp_name'];

    $targetFolder_path = $_SERVER['DOCUMENT_ROOT'] . $targetFolder;
    if ( !file_exists( $targetFolder_path ) ) {
        mkdir( $targetFolder_path , 0777 ,true );
    }

    $file = rand( 1 , 10000 ) . time() . strrchr( $_FILES['Filedata']['name'] , '.' );
    $targetFile = $targetFolder_path .'/'. $file;

    // Validate the file type
    $fileTypes = array('jpg','jpeg','gif','png'); // File extensions
    $fileParts = pathinfo($_FILES['Filedata']['name']);


    //上传至腾讯云
    if($type=='jiguo'){

        //上传至腾讯云
        include_once "../Image2/Image.php";
        $Image = new Image();
        $uploadRet = $Image->upload($tempFile);

        if (0 === $uploadRet['code']) {
            $fileid = $uploadRet['data']['fileid'];
        }

        if (in_array(strtolower($fileParts['extension']),$fileTypes)) {
            move_uploaded_file($tempFile,$targetFile);
            $file = $targetFolder.'/'.$file;
            $data = array(
                'file'=>$file,
                'url'=>'http://pic.jiguo.com/200717/0/'.$fileid.'/640',
                'url2'=>'http://pic.jiguo.com/200717/0/'.$fileid.'/230x230',
                'fileid'=>$fileid
            );
            echo json_encode($data);
        } else {
            echo 'Invalid file type.';
        }
    }else{
        include "../Image/ImageV2.php";
        $uploadRet = ImageV2::upload($tempFile);

        if (0 === $uploadRet['code']) {
            $fileid = $uploadRet['data']['fileid'];
        }

        if (in_array(strtolower($fileParts['extension']),$fileTypes)) {
            move_uploaded_file($tempFile,$targetFile);
            $file = $targetFolder.'/'.$file;
            $data = array(
                'file'=>$file,
                'url'=>'http://s1.jiguo.com/'.$fileid.'/640',
                'url2'=>'http://s1.jiguo.com/'.$fileid.'/230x230',
                'fileid'=>$fileid
            );
            echo json_encode($data);
        } else {
            echo 'Invalid file type.';
        }
    }

}