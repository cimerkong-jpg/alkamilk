<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$allowedFields = [
  'created_at',
  'form_type',
  'source',
  'condition',
  'phone',
  'name',
  'combo',
  'area',
  'note',
  'ip',
  'user_agent',
];

$row = [
  'created_at' => date('c'),
  'form_type' => $_POST['form_type'] ?? '',
  'source' => $_POST['source'] ?? '',
  'condition' => $_POST['condition'] ?? '',
  'phone' => $_POST['phone'] ?? '',
  'name' => $_POST['name'] ?? '',
  'combo' => $_POST['combo'] ?? '',
  'area' => $_POST['area'] ?? '',
  'note' => $_POST['note'] ?? '',
  'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
  'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
];

$row = array_map(function ($value) {
  $value = trim((string) $value);
  return preg_replace('/\s+/', ' ', $value);
}, $row);

if ($row['condition'] === '' || $row['phone'] === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

$file = __DIR__ . '/leads.csv';
$isNew = !file_exists($file);
$handle = fopen($file, 'a');

if (!$handle) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Cannot save lead']);
  exit;
}

flock($handle, LOCK_EX);

if ($isNew) {
  fputcsv($handle, $allowedFields);
}

fputcsv($handle, array_map(function ($field) use ($row) {
  return $row[$field] ?? '';
}, $allowedFields));

flock($handle, LOCK_UN);
fclose($handle);

echo json_encode(['ok' => true]);
