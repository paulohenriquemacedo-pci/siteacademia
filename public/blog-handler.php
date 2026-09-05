<?php
/**
 * Handler para servir tags Open Graph server-side no domínio sistemaacademia.com.br
 * Este arquivo deve ser colocado na raiz do servidor (public_html ou similar)
 */

$slug = $_GET['slug'] ?? '';
$isBot = false;
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';

// Lista de User-Agents que identificam crawlers de redes sociais e buscadores
if (preg_match('/facebookexternalhit|facebot|twitterbot|linkedinbot|whatsapp|telegrambot|slackbot|discordbot|googlebot|bingbot|applebot/i', $ua)) {
    $isBot = true;
}

// Se não for um bot e houver um slug, redirecionamos para a página do blog no App (SPA)
// Mas o .htaccess já deve lidar com isso. Se chegamos aqui sem ser bot, servimos o index.html.
if (!$isBot || !$slug) {
    if (file_exists('index.html')) {
        readfile('index.html');
    } else {
        header("Location: /");
    }
    exit;
}

// É um BOT. Buscamos os dados do post via Supabase REST API
$supabaseUrl = "https://xqippijwsekuccgsjzrp.supabase.co";
$supabaseKey = "sb_publishable_cNqUV3FPssYu2aSgHWZQiw_2aQBUNnt"; // Chave Anon/Publishable

$apiUrl = $supabaseUrl . "/rest/v1/posts?slug=eq." . urlencode($slug) . "&select=title,excerpt,image_url";

$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "apikey: " . $supabaseKey,
    "Authorization: Bearer " . $supabaseKey
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$posts = json_decode($response, true);
$post = (!empty($posts)) ? $posts[0] : null;

// Fallback se o post não existir
if (!$post) {
    if (file_exists('index.html')) {
        readfile('index.html');
    } else {
        header("Location: /");
    }
    exit;
}

$title = htmlspecialchars($post['title'] . ' | Sistema A.C.A.D.E.M.I.A');
$description = htmlspecialchars($post['excerpt'] ?? "Leia mais sobre este post no blog do Sistema A.C.A.D.E.M.I.A");
$rawImageUrl = $post['image_url'] ?? "https://sistemaacademia.com.br/placeholder.svg";

// Otimização de imagem para o Facebook
$imageUrl = $rawImageUrl;
if (strpos($imageUrl, '/storage/v1/object/public/') !== false) {
    $imageUrl = str_replace('/storage/v1/object/public/', '/storage/v1/render/image/public/', $imageUrl);
    $imageUrl .= (strpos($imageUrl, '?') !== false ? '&' : '?') . 'width=1200&height=630&resize=fill';
}
$imageUrl = htmlspecialchars($imageUrl);

$canonicalUrl = "https://sistemaacademia.com.br/blog/" . $slug;
$appId = "966242223397117";

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    
    <!-- Open Graph / Facebook -->
    <meta property="fb:app_id" content="<?php echo $appId; ?>">
    <meta property="og:type" content="article">
    <meta property="og:url" content="<?php echo $canonicalUrl; ?>">
    <meta property="og:title" content="<?php echo $title; ?>">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="og:image" content="<?php echo $imageUrl; ?>">
    <meta property="og:image:secure_url" content="<?php echo $imageUrl; ?>">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Sistema A.C.A.D.E.M.I.A">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="<?php echo $canonicalUrl; ?>">
    <meta name="twitter:title" content="<?php echo $title; ?>">
    <meta name="twitter:description" content="<?php echo $description; ?>">
    <meta name="twitter:image" content="<?php echo $imageUrl; ?>">

    <!-- Canonical -->
    <link rel="canonical" href="<?php echo $canonicalUrl; ?>">

    <script>
        // Redireciona humanos para a URL correta no SPA
        window.location.href = "<?php echo $canonicalUrl; ?>";
    </script>
</head>
<body>
    Redirecionando para <a href="<?php echo $canonicalUrl; ?>"><?php echo $title; ?></a>...
</body>
</html>
